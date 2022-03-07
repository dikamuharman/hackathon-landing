import type { GetServerSidePropsContext, NextPage } from 'next'
import Container from '../../components/Container'
import InputText, { DefaultItemInput } from '../../components/Forms/InputText'
import Link from 'next/link'
import { HiEye } from 'react-icons/hi'
import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import nookies from 'nookies'
import Router from 'next/router'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx)

  if (cookies.token) {
    return {
      redirect: {
        destination: '/admin',
      },
    }
  }
  return {
    props: {},
  }
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<DefaultItemInput>()

  const onSubmit: SubmitHandler<DefaultItemInput> = async (inputValue) => {
    console.log(process.env.URL_API)
    try {
      const { data } = await axios.post(
        `${process.env.URL_API}/api/auth/local`,
        {
          identifier: inputValue.email,
          password: inputValue.password,
        }
      )
      console.log(data)
      nookies.set(null, 'token', data.jwt, {
        maxAge: 7 * 24 * 60 * 60,
      })
      Router.replace('/admin')
    } catch (error) {
      console.log(error)
    }
  }

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
                required
              />
              <InputText
                label="Password"
                name="password"
                type="password"
                icon={<HiEye />}
                register={register}
                required
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
