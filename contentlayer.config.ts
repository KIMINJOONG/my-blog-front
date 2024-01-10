import {
  defineNestedType,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    date: {
      type: "string",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The featured image of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The author image of the post",
      required: true,
    },
    categories: {
      type: "list",
      of: Category,
      description: "The category image of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc: any) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    title: {
      type: "string",
      description: "The tile of the category",
      required: true,
    },
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of project",
      required: true,
    },
    location: {
      type: "string",
      description: "The location of project",
      required: true,
    },
    date: {
      type: "string",
      description: "The date of project",
      required: true,
    },
    image: {
      type: "string",
      description: "The featured image of project",
      required: true,
    },
    client: {
      type: "string",
      description: "The client of project",
      required: true,
    },
    role: {
      type: "string",
      description: "The role of project",
      required: true,
    },
    year: {
      type: "string",
      description: "The year of project",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
});
