'use client';

import logo from '@/public/logo.svg';
import { Button, Divider, Input, message, UploadProps } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import Image from 'next/image';
import copyIcon from '@/public/copy-right.png';

export default function Home() {
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <div>
      <div className="bg-black w-full py-[5px] text-white text-center">
        ItoMNear is Open-source project fully on-chain See Docs
      </div>

      <div className="flex justify-center items-center w-full mt-[20px]">
        <Image src={logo} alt="logo" width={200} height={200} />
      </div>

      <div className="flex flex-col lg:flex-row gap-[30px] mt-[20px] px-[30px] border-2 min-h-[80vh] justify-center items-center">
        <div className="rounded-[20px] border-[1px] border-gray-200 p-[24px] flex-1">
          <h1 className="text-[22px] font-bold">Generator</h1>
          <h1>Information</h1>
          <div className="flex flex-col gap-[10px]">
            <Input.Password
              style={{
                borderRadius: 16,
                height: 48,
                backgroundColor: '#F0F0F0',
              }}
              placeholder="Password"
            />
            <Dragger {...props}>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
            <Button className="!bg-black !text-white !h-[40px] !rounded-[16px]">
              Generate
            </Button>
          </div>
        </div>
        <div className="rounded-[20px] border-[1px] border-gray-200 p-[24px] flex-1 w-full">
          <h1 className="mb-[20px]">Output</h1>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="text-[#00000099]">Public Key</h1>
              <div className="flex items-center gap-[5px]">
                <h1 className="text-[#A8A8A8]">0x000...123</h1>
                <Image src={copyIcon} alt="logo" width={20} height={20} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[#00000099]">Private Key</h1>
              <div className="flex items-center gap-[5px]">
                <h1 className="text-[#A8A8A8]">0x000...123</h1>
                <Image src={copyIcon} alt="logo" width={20} height={20} />
              </div>
            </div>
            <Divider />

            <Input
              style={{
                borderRadius: 16,
                height: 48,
                backgroundColor: '#F0F0F0',
              }}
              value={'test 123 123 3 123 asdj 123 5 '}
            />
            <Button className="!bg-black !text-white !h-[40px] !rounded-[16px]">
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
