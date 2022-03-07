import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'

type CollapseProps = {
  question: string
  answer: string
}

const Collapse = ({ question, answer }: CollapseProps) => {
  return (
    <div className="my-12">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex">
                  <div className=" h-[14px] w-[14px] shrink-0 rounded-full bg-secodary"></div>
                  <span className=" ml-3 text-left text-lg font-semibold text-white">
                    {question}
                  </span>
                </div>
                {open ? (
                  <HiMinus color="#fff" size={35} />
                ) : (
                  <HiPlus color="#fff" size={35} />
                )}
              </div>
              <hr className="my-3" />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-9 py-6 text-white">
                <p>{answer}</p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default Collapse
