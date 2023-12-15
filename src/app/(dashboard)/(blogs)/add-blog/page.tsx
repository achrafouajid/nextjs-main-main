"use client";
import React, { useState } from "react";
import CustomInput from "@/components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Stepper } from "react-form-stepper";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info: { file: { name?: any; status?: any }; fileList: any }) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e: { dataTransfer: { files: any } }) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Addblog = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e: any) => {
    setDesc(e);
  };
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold">Publier un Blog</h3>
      <Stepper
        steps={[
          { label: "Add Blog Details" },
          { label: "Upload Images" },
          { label: "Finish" },
        ]}
        activeStep={1}
      />
      <div>
        <form action="">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <div className="mt-4">
            <CustomInput type="text" label="Enter Blog Title" />
          </div>
          <select
            name=""
            className="form-select block w-full py-3 mb-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            id=""
          >
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt) => {
              handleDesc(evt);
            }}
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-200"
          >
            Publier
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
