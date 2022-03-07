import React from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next'
import Container from '../../components/Container'
import InputText, { DefaultItemInput } from '../../components/Forms/InputText'
import { HiEye } from 'react-icons/hi'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
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

const index: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DefaultItemInput>()
  const onSubmit: SubmitHandler<DefaultItemInput> = async (data) => {
    console.log(process.env.URL_API)
    if (data.password === data.retype_password) {
      try {
        const res = await axios.post(
          `${process.env.URL_API}/api/auth/local/register`,
          {
            email: data.email,
            password: data.password,
            phone: data.phone,
            username: data.username,
            name: data.name,
            retype_password: data.retype_password,
          }
        )
        console.log(res.data.token)
        nookies.set(null, 'token', res.data.jwt, {
          maxAge: 7 * 24 * 60 * 60,
        })
        Router.replace('/admin')
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <main className="flex lg:h-screen lg:items-start">
      <Container
        as="section"
        className="mt-8 w-full rounded md:w-4/5 lg:mt-16 lg:w-3/5 lg:bg-white "
      >
        <div className="my-8 px-3">
          <h1 className="mb-6 text-5xl font-bold text-textPrimary">Register</h1>
          <p className="text-sm">
            Welcome to GDSC Hackfest Indonesia platfrom. <br /> Register as a
            member to experience.
          </p>
          <div className="mt-7">
            <form
              className="grid grid-cols-1 gap-5 lg:grid-cols-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputText
                required
                register={register}
                name="username"
                label="Username"
                type="text"
                placeholder="Eg : fikiAlamsyah"
              />
              <InputText
                required
                label="Name"
                type="text"
                placeholder="Eg: Fiki Alamsyah"
                register={register}
                name="name"
              />
              <InputText
                required
                label="Phone Number"
                type="tel"
                addOn={'+62'}
                placeholder="eg: 8123456789"
                name="phone"
                register={register}
              />
              <InputText
                required
                label="E-mail"
                type="email"
                placeholder="Eg: email@mail.com"
                register={register}
                name="email"
              />
              <InputText
                required
                label="Password"
                type="password"
                icon={<HiEye />}
                register={register}
                name="password"
              />
              <InputText
                required
                label="Confirm Password"
                type="password"
                icon={<HiEye />}
                register={register}
                name="retype_password"
              />
              <div className="mb-4 flex items-center">
                <input
                  id="checkbox-1"
                  aria-describedby="checkbox-1"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-blue-500 "
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-3 text-sm font-medium "
                >
                  I agree to the{' '}
                  <a href="#" className="d text-primary hover:underline">
                    terms and conditions
                  </a>
                </label>
              </div>
              <button className="inline-block w-full cursor-pointer  rounded-xl bg-primary px-4 py-[10px]  text-white hover:bg-[#0355A7] hover:shadow-md lg:px-6 lg:py-[15px]">
                Sign up
              </button>
            </form>
            <div className="mt-5 flex w-full justify-evenly">
              <span>Already a member ?</span>
              <Link passHref href="/login">
                <a className="text-primary underline">Login</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default index
