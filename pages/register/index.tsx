import React from 'react'
import type { NextPage } from 'next'
import Container from '../../components/Container'
import InputText from '../../components/Forms/InputText'
import { HiEye } from 'react-icons/hi'
import Link from 'next/link'
import Button from '../../components/Buttons'
import { useForm, SubmitHandler } from 'react-hook-form'

type RegisterInput = {
  username: string
  name: string
  phone: string
  email: string
  password: string
  retype_password: string
}

const index: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>()
  const onSubmit: SubmitHandler<RegisterInput> = (data) => console.log(data)

  return (
    <main className="flex lg:h-screen lg:items-start">
      <Container
        as="section"
        className="mt-12 mb-12 w-full rounded md:w-4/5 lg:mt-24 lg:w-3/5 lg:bg-white lg:shadow"
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
                register={register}
                name="username"
                label="Username"
                type="text"
                placeholder="Eg : fikiAlamsyah"
              />
              <InputText
                label="Name"
                type="text"
                placeholder="Eg: Fiki Alamsyah"
                register={register}
                name="name"
              />
              <InputText
                label="Phone Number"
                type="tel"
                addOn={'+62'}
                placeholder="eg: 8123456789"
                name="phone"
                register={register}
              />
              <InputText
                label="E-mail"
                type="email"
                placeholder="Eg: email@mail.com"
                register={register}
                name="email"
              />
              <InputText
                label="Password"
                type="password"
                icon={<HiEye />}
                register={register}
                name="password"
              />
              <InputText
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
              <Button
                as="button"
                type="submit"
                color="secondary"
                variant="default"
                className="!rounded-full"
              >
                Sign up
              </Button>
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
