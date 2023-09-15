// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type IndexDocumentDataSlicesSlice =
  | NaamSlice
  | ProfilePictureSlice
  | ButtonSlice;

/**
 * Content for Index documents
 */
interface IndexDocumentData {
  /**
   * Slice Zone field in *Index*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: index.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<IndexDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Index*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: index.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Index*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: index.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Index*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: index.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Index document from Prismic
 *
 * - **API ID**: `index`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IndexDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<IndexDocumentData>, "index", Lang>;

/**
 * Content for Naam documents
 */
interface NaamDocumentData {
  /**
   * name field in *Naam*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: naam.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Naam document from Prismic
 *
 * - **API ID**: `naam`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NaamDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<NaamDocumentData>, "naam", Lang>;

/**
 * Content for ProfilePicture documents
 */
interface ProfilepictureDocumentData {
  /**
   * ProfilePicture field in *ProfilePicture*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: profilepicture.profilepicture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profilepicture: prismic.ImageField<never>;
}

/**
 * ProfilePicture document from Prismic
 *
 * - **API ID**: `profilepicture`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProfilepictureDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProfilepictureDocumentData>,
    "profilepicture",
    Lang
  >;

export type AllDocumentTypes =
  | IndexDocument
  | NaamDocument
  | ProfilepictureDocument;

/**
 * Primary content in *Button → Primary*
 */
export interface ButtonSliceDefaultPrimary {
  /**
   * Button field in *Button → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: button.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;
}

/**
 * Default variation for Button Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ButtonSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Button*
 */
type ButtonSliceVariation = ButtonSliceDefault;

/**
 * Button Shared Slice
 *
 * - **API ID**: `button`
 * - **Description**: Button
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSlice = prismic.SharedSlice<"button", ButtonSliceVariation>;

/**
 * Primary content in *Naam → Primary*
 */
export interface NaamSliceDefaultPrimary {
  /**
   * name field in *Naam → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: naam.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Default variation for Naam Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NaamSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NaamSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Naam*
 */
type NaamSliceVariation = NaamSliceDefault;

/**
 * Naam Shared Slice
 *
 * - **API ID**: `naam`
 * - **Description**: Naam
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NaamSlice = prismic.SharedSlice<"naam", NaamSliceVariation>;

/**
 * Primary content in *ProfilePicture → Primary*
 */
export interface ProfilePictureSliceDefaultPrimary {
  /**
   * ProfilePicture field in *ProfilePicture → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: profile_picture.primary.profilepicture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profilepicture: prismic.ImageField<never>;
}

/**
 * Default variation for ProfilePicture Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProfilePictureSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProfilePictureSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProfilePicture*
 */
type ProfilePictureSliceVariation = ProfilePictureSliceDefault;

/**
 * ProfilePicture Shared Slice
 *
 * - **API ID**: `profile_picture`
 * - **Description**: ProfilePicture
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProfilePictureSlice = prismic.SharedSlice<
  "profile_picture",
  ProfilePictureSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      IndexDocument,
      IndexDocumentData,
      IndexDocumentDataSlicesSlice,
      NaamDocument,
      NaamDocumentData,
      ProfilepictureDocument,
      ProfilepictureDocumentData,
      AllDocumentTypes,
      ButtonSlice,
      ButtonSliceDefaultPrimary,
      ButtonSliceVariation,
      ButtonSliceDefault,
      NaamSlice,
      NaamSliceDefaultPrimary,
      NaamSliceVariation,
      NaamSliceDefault,
      ProfilePictureSlice,
      ProfilePictureSliceDefaultPrimary,
      ProfilePictureSliceVariation,
      ProfilePictureSliceDefault,
    };
  }
}
