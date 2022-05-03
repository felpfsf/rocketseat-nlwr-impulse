import {ChatTeardropDots} from 'phosphor-react';
import { useState } from 'react';
import {Popover} from '@headlessui/react'

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false) //checará se o botão está aberto, inicia como falso pois ele se encontra fechado
  // Função que altera o estado de visibilidade do widget
  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    // Com o Popover substitui o div, adiciona no button e dispensa o uso da função
    <Popover className='absolute bottom-5 right-5'> 
      {/* { isWidgetOpen && <p>Hello World</p> } */}
      <Popover.Panel>Hello World</Popover.Panel>

      
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