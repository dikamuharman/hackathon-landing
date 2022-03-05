import React from 'react'
import Container from '../../../components/Container'
import InputText, {
  DefaultItemInput,
} from '../../../components/Forms/InputText'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import LogoDsc from '../../../assets/logo.svg'

const RegistrationTeam = () => {
  const { register, watch, handleSubmit } = useForm<DefaultItemInput>()
  const onSubmit: SubmitHandler<DefaultItemInput> = (data) => console.log(data)

  return (
    <Container as="main" className="mt-12 bg-white py-5 md:w-[750px] ">
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
        />
        <InputText
          register={register}
          type="text"
          name="anggotaTim"
          label="Anggota tim"
          helperText="Setiap nama anggota di pisahkan koma. contoh: rizky febrian,Deny sumargo"
        />
        <InputText
          register={register}
          type="file"
          name="uploadFoto"
          label="Upload Foto tim"
          accept="image/png, image/jpeg"
        />
        <InputText
          register={register}
          type="file"
          name="uploadBuktiGSC"
          label="Upload bukti pendaftaran form gsc"
        />
        <button className="inline-block w-full cursor-pointer  rounded-xl bg-primary px-4 py-[10px]  text-white hover:bg-[#0355A7] hover:shadow-md lg:px-6 lg:py-[15px]">
          Daftar
        </button>
      </form>
    </Container>
  )
}

export default RegistrationTeam
