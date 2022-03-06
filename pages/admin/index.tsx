import { GetServerSideProps, NextPage, GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import React from 'react'
import Container from '../../components/Container'
import LogoDsc from '../../assets/logo.svg'
import DropdownMenu from '../../components/DropdownMenu'
import Link from 'next/link'
import nookies from 'nookies'

const timeLines = [
  {
    name: 'Registration',
    date: '5 - 18 march',
  },
  {
    name: 'Opening & Technical meeting',
    date: '9 march',
  },
  {
    name: 'Tech talk',
    date: '20 march',
  },
  {
    name: 'Mentorship',
    date: '21 - 25 march',
  },
  {
    name: 'Awarding top 10 & top 5',
    date: '26 march',
  },
  {
    name: 'Showcase top 5 + awarding top 3',
    date: '27 march',
  },
  {
    name: 'Controlling Partisipant GSC',
    date: '28 march',
  },
]

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx)

  if (!cookies.token) {
    return {
      redirect: {
        destination: '/login',
      },
    }
  }
  return {
    props: {},
  }
}

const AdminHome: NextPage = () => {
  return (
    <Container as="main" className="lg:w-[1124px]">
      <div className="flex w-full justify-between">
        <Image src={LogoDsc} />
        <DropdownMenu />
      </div>
      <ol className="relative mt-10 border-l border-gray-200 dark:border-gray-700">
        {timeLines.map((timeLine, i) => (
          <li className="mb-10 ml-4">
            <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {timeLine.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900">
              {timeLine.name}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 ">
              Isi deskripsi singkat tentang kegiatan diatas
            </p>
            <Link href="/admin/registrasi-tim" passHref>
              <a className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100  ">
                Daftar tim
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  )
}

export default AdminHome
