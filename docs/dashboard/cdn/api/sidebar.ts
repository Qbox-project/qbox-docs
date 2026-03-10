import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Uploads",
      items: [
        {
          type: "doc",
          id: "dashboard/cdn/api/upload-file",
          label: "Upload file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dashboard/cdn/api/create-presigned-url",
          label: "Create Presigned URL",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dashboard/cdn/api/upload-file-presigned-url",
          label: "Upload file (Presigned URL)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dashboard/cdn/api/delete-file",
          label: "Delete file",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
