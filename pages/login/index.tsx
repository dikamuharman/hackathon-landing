import type { NextPage } from 'next'
import Container from '../../components/Container'
import Button from '../../components/Buttons'
import InputText, { DefaultItemInput } from '../../components/Forms/InputText'
import Link from 'next/link'
import { HiEye } from 'react-icons/hi'
import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<DefaultItemInput>()

  const onSubmit: SubmitHandler<DefaultItemInput> = (data) => console.log(data)

  return (
    <main className="flex h-screen lg:items-start">
      <Container
        as="section"
        className=" mt-16 w-full px-3 md:w-3/5 lg:w-2/5 lg:bg-white lg:!px-8 "
      >
        <div className="my-8 px-3">
          <h1 className="mb-6 text-5xl font-bold text-textPrimary">Login</h1>
          <p className="text-sm">
            Welcome to GDSC Hackfest Indonesia platfrom. Register as a member to
            experience.
          </p>
          <div className="mt-14">
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                label="Email"
                name="email"
                type="email"
                register={register}
              />
              <InputText
                label="Password"
                name="password"
                type="password"
                icon={<HiEye />}
                register={register}
              />
              <div className="mb-4 flex w-full justify-end">
                <Link href="#" passHref>
                  <a className="underline">Forget Password ?</a>
                </Link>
              </div>
              <button className="inline-block w-full cursor-pointer  rounded-xl bg-primary px-4 py-[10px]  text-white hover:bg-[#0355A7] hover:shadow-md lg:px-6 lg:py-[15px]">
                Login
              </button>
            </form>
            <div className="mt-5 flex w-full justify-evenly">
              <span>Not member yet ? </span>
              <Link passHref href="/register">
                <a className="text-primary underline">Register</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Login
