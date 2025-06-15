
export type PostMeta = {
  category: string;
  slug: string;
  title: string;
  date: string;
  thumbnail: string;
  desc?: string;
  tags?: string[];
};

export type PostData = {
  meta: PostMeta;
  content: string;
}

export type PostIdentifier = {
  category: string;
  slug: string;  
}

export type AdjacentPosts = {
  prev : PostMetaWithCategory | null;
  next : PostMetaWithCategory | null;
}

export type PostMetaWithCategory = PostMeta & {category: string};

export type PostProps = Promise<{category: string, slug: string}>;

export type CategoryProps = Promise<{category: string}>;

export type TagProps = Promise<{tag: string}>;

export type Heading = { //HTMLHeadingElement와 유사한 객체
    id: string;
    text: string;
    level: number;
}


export type ThemeOption = 'light' | 'dark' | 'system'; 