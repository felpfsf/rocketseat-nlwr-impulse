import {ChatTeardropDots} from 'phosphor-react';
import { useState } from 'react';
import {Popover} from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false) //checará se o botão está aberto, inicia como falso pois ele se encontra fechado
  // Função que altera o estado de visibilidade do widget
  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    // Com o Popover substitui o div, adiciona no button e dispensa o uso da função
    <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'> 
      {/* { isWidgetOpen && <p>Hello World</p> } */}
      <Popover.Panel>
        <WidgetForm/>
      </Popover.Panel>

      
      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}