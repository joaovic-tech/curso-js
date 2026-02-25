export type PostID = number;

export type PostAuthor = {
  id: PostID;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCategory = {
  id: PostID;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  id: PostID;
  documentId: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: string | null;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostData = {
  id: PostID;
  documentId: string;
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: PostCover;
};
