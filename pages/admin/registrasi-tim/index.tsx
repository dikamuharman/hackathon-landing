import React, { useState } from 'react'
import Container from '../../../components/Container'
import InputText, {
  DefaultItemInput,
} from '../../../components/Forms/InputText'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import LogoDsc from '../../../assets/logo.svg'
import axios from 'axios'
import nookies from 'nookies'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import router from 'next/router'
import LoadingSpinner from '../../../components/LoadingSpinner'

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
    props: {
      cookies: cookies.token,
    },
  }
}

type RegistrationTeamProps = {
  cookies: string
}

const RegistrationTeam = ({
  cookies,
}: InferGetServerSidePropsType<RegistrationTeamProps>) => {
  const [members, setMembers] = useState<Array<{ memberName: string }>>([
    { memberName: '' },
  ])
  const [inputProcess, setInputProcess] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<DefaultItemInput>()

  const onSubmit: SubmitHandler<DefaultItemInput> = async (inputValue) => {
    setInputProcess(true)
    try {
      console.log(inputValue)

      const formData = new FormData()
      formData.append('file', inputValue.uploadBuktiGSC[0])
      formData.append('upload_preset', 'ml_default')

      const resImg = await axios.post(
        'https://api.cloudinary.com/v1_1/dmovayme8/image/upload',
        formData
      )
      const imageName = resImg.data.secure_url
      const res = await axios({
        method: 'POST',
        url: `${process.env.URL_API}/api/teams`,
        headers: {
          Authorization: `Bearer ${cookies}`,
          'Content-Type': 'application/json',
        },
        data: {
          data: {
            team_name: inputValue.namaTim,
            member_team: inputValue.memberTeam,
            bukti_registrasi_gsc: imageName,
          },
        },
      })

      if (res.status === 200) {
        setInputProcess(false)
        router.replace('/admin')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const addFormField = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (members.length <= 3) {
      setMembers((prevState) => [...prevState, { memberName: '' }])
    } else {
      setDisable(true)
    }
  }

  const removeFormField = (
    i: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    const newFormFields = [...members]
    newFormFields.splice(i, 1)
    setMembers(newFormFields)
    if (newFormFields.length <= 3) setDisable(false)
  }

  return (
    <Container as="main" className="mt-12 bg-white py-5 md:w-[750px]">
      {inputProcess && <LoadingSpinner />}
      <div className="mb-7 flex w-full justify-center">
        <Image src={LogoDsc} />
      </div>
      <h1 className="mb-11 text-center text-xl font-bold">Registration Team</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          register={register}
          type="text"
          name="namaTim"
          label="Nama tim"
          helperText="Contoh nama tim : arsenal"
          required
        />

        <button
          onClick={addFormField}
          className="inline-block w-full cursor-pointer  rounded-xl bg-secodary px-4 py-[10px]  text-white transition-all hover:bg-[#ED8E00] hover:shadow-md lg:px-6 lg:py-[15px]"
          disabled={disable}
        >
          Tambah anggota tim
        </button>
        <div className="my-3">
          {members.map((_, i) => (
            <div key={i} className="my-2 flex flex-col rounded border p-2">
              <InputText
                register={register}
                type="text"
                name={`memberTeam.${i}.name`}
                label="Nama anggota"
                required
              />
              <button
                className="inline-block w-full cursor-pointer  rounded-xl  bg-red-100 px-4 py-[10px] font-medium text-gray-800 transition-all hover:bg-red-400 hover:text-white hover:shadow-md lg:px-6 lg:py-[15px]"
                onClick={(e) => removeFormField(i, e)}
              >
                Hapus kolom
              </button>
            </div>
          ))}
        </div>

        <InputText
          register={register}
          type="file"
          name="uploadBuktiGSC"
          label="Upload bukti pendaftaran form gsc"
          helperText="jika belum daftar silahkan daftar di  <a href='https://s.id/RegistrasiGSC' rel='noreferrer noopener' target='_blank' class='underline' > link ini</a> dan screenshoot hasil pendaftaran"
          required
        />
        <button className="inline-block w-full cursor-pointer  rounded-xl bg-primary px-4 py-[10px]  text-white transition-all hover:bg-[#0355A7] hover:shadow-md lg:px-6 lg:py-[15px]">
          Daftar
        </button>
      </form>
    </Container>
  )
}

export default RegistrationTeam
