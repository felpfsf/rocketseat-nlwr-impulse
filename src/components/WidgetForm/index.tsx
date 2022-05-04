import { useState } from "react";

import { CloseButton } from '../CloseButton';

import bugImageUrl from '../../assets/button-card/bug.svg'
import ideaImageUrl from '../../assets/button-card/idea.svg'
import thoughtImageUrl from '../../assets/button-card/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    },
  },
};

/* código de js que vai percorrer o vetor de imagens
* Object.entries(feedbackTypes) => 
  [
     ['BUG', {...}], 
     ['IDEA', {...}], 
     ['OTHER', {...}]
  ]
*/

// typescript: função que seleciona somente as chaves(keyof) do objeto feedbackTypes
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  // Usando um estado para saber qual botão o usuário está clicando  
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto text-white">
      
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ):(
        <>
          {!feedbackType ? ( 
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />       
          ) : (
            <FeedbackContentStep 
              feedbackType={feedbackType}
              onFeedbackRestartRequested = {handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />        
          )}
        </>
      )}
      
      <footer className="text-xs text-neutral-400 leading-4">
        Feito com ♥ pela <a className="underline underline-offset-2" href="http://rocketseat.com.br" target="_blank" rel="noopener noreferrer">Rocketseat</a>
      </footer>
    </div>
  );
}