import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

interface ModalProps {
  show?: boolean;
  setShow: (open: boolean) => void | Dispatch<SetStateAction<boolean>>;
  children: React.ReactElement;
}

const Modal = ({ show = true, setShow, children }: ModalProps) => {
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          open={show}
          onClose={() => setShow(false)}
        >
          <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-[.4]' />
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                {children}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
