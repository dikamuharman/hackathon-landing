import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import gdscUnhas from '../../assets/partner/gds-unhas.png'
import gdscBinusInter from '../../assets/partner/gdsc-binusinternatioal.png'
import gdscBinusMalang from '../../assets/partner/gdsc-binusmalang.png'
import gdscBumigora from '../../assets/partner/gdsc-bumigora.png'
import gdscCiputra from '../../assets/partner/gdsc-ciputra.png'
import gdscEsaUnggul from '../../assets/partner/gdsc-esaunggul.png'
import gdscGundar from '../../assets/partner/gdsc-gundar.png'
import gdscItb from '../../assets/partner/gdsc-itb.png'
import gdscItd from '../../assets/partner/gdsc-itd.png'
import gdscItPln from '../../assets/partner/gdsc-itpln.png'
import gdscMulawarman from '../../assets/partner/gdsc-mulawarman.png'
import gdscnf from '../../assets/partner/gdsc-nf.png'
import gdscNusaCendana from '../../assets/partner/gdsc-nusacendana.png'
import gdscPolsri from '../../assets/partner/gdsc-polsri.png'
import gdscPrasmul from '../../assets/partner/gdsc-prasmul.png'
import gdscSampoerna from '../../assets/partner/gdsc-sampoerna.png'
import gdscSiliwangi from '../../assets/partner/gdsc-siliwangi.png'
import gdscSTIMKBDG from '../../assets/partner/gdsc-stmikbandung.png'
import gdscTrilogi from '../../assets/partner/gdsc-trilogi.png'
import gdscTrunojoyo from '../../assets/partner/gdsc-trunojoyo.png'
import gdscUdinus from '../../assets/partner/gdsc-udinus.png'
import gdscUi from '../../assets/partner/gdsc-ui.png'
import gdscUin from '../../assets/partner/gdsc-uin.png'
import gdscUnbraw from '../../assets/partner/gdsc-unbraw.png'
import gdscUnikom from '../../assets/partner/gdsc-unikom.png'
import gdscUnsri from '../../assets/partner/gdsc-unsri.png'
import gdscUPI from '../../assets/partner/gdsc-upi.png'
import gdscUpnYogya from '../../assets/partner/gdsc-upnyogya.png'

const listImage = [
  gdscUnhas,
  gdscBinusInter,
  gdscBinusMalang,
  gdscBumigora,
  gdscCiputra,
  gdscEsaUnggul,
  gdscGundar,
  gdscItPln,
  gdscItb,
  gdscItd,
  gdscMulawarman,
  gdscNusaCendana,
  gdscPolsri,
  gdscPrasmul,
  gdscSTIMKBDG,
  gdscSampoerna,
  gdscSiliwangi,
  gdscTrilogi,
  gdscTrunojoyo,
  gdscUPI,
  gdscUdinus,
  gdscUnbraw,
  gdscUnbraw,
  gdscUnikom,
  gdscUnsri,
  gdscUpnYogya,
  gdscnf,
  gdscUi,
  gdscUin,
]

const MediaSection = () => {
  return (
    <Container
      as="section"
      className="flex w-full flex-col items-center md:px-8 "
    >
      <h2 className="mb-7 mt-20 text-3xl font-bold text-textPrimary lg:mb-10 lg:text-5xl">
        Media Partner
      </h2>
      <div className=" flex w-full flex-wrap justify-center  rounded-lg bg-white px-4 py-9 shadow lg:flex-row lg:p-8">
        {listImage.map((img, i) => (
          <div className="m-4 w-[250px]" key={`${i}-img`}>
            <Image src={img} />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default MediaSection
