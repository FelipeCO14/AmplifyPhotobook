/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAlbumInput = {
  id?: string | null,
  owner: string,
  ownerId: string,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelAlbumConditionInput = {
  ownerId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateAlbumInput = {
  id: string,
  owner?: string | null,
  ownerId?: string | null,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteAlbumInput = {
  id?: string | null,
};

export type CreatePhotoInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  fullsize: S3ObjectInput,
  thumbnail?: S3ObjectInput | null,
  contentType?: string | null,
  gps?: GPSInput | null,
  height?: number | null,
  width?: number | null,
  size?: number | null,
  photoAlbumId?: string | null,
};

export type S3ObjectInput = {
  region: string,
  bucket: string,
  key: string,
};

export type GPSInput = {
  latitude: string,
  longitude: string,
  altitude: number,
};

export type ModelPhotoConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  contentType?: ModelStringInput | null,
  height?: ModelIntInput | null,
  width?: ModelIntInput | null,
  size?: ModelIntInput | null,
  and?: Array< ModelPhotoConditionInput | null > | null,
  or?: Array< ModelPhotoConditionInput | null > | null,
  not?: ModelPhotoConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type DeletePhotoInput = {
  id?: string | null,
};

export type UpdatePhotoInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  fullsize?: S3ObjectInput | null,
  thumbnail?: S3ObjectInput | null,
  contentType?: string | null,
  gps?: GPSInput | null,
  height?: number | null,
  width?: number | null,
  size?: number | null,
  photoAlbumId?: string | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  ownerId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPhotoFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  contentType?: ModelStringInput | null,
  height?: ModelIntInput | null,
  width?: ModelIntInput | null,
  size?: ModelIntInput | null,
  and?: Array< ModelPhotoFilterInput | null > | null,
  or?: Array< ModelPhotoFilterInput | null > | null,
  not?: ModelPhotoFilterInput | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum:  {
    __typename: "Album",
    id: string,
    owner: string,
    ownerId: string,
    name: string,
    createdAt: string | null,
    updatedAt: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      items:  Array< {
        __typename: "Photo",
        id: string,
        createdAt: string | null,
        updatedAt: string | null,
        album:  {
          __typename: "Album",
          id: string,
          owner: string,
          ownerId: string,
          name: string,
          createdAt: string | null,
          updatedAt: string | null,
          photos:  {
            __typename: "ModelPhotoConnection",
            nextToken: string | null,
          } | null,
        } | null,
        fullsize:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        },
        thumbnail:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        } | null,
        contentType: string | null,
        gps:  {
          __typename: "GPS",
          latitude: string,
          longitude: string,
          altitude: number,
        } | null,
        height: number | null,
        width: number | null,
        size: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum:  {
    __typename: "Album",
    id: string,
    owner: string,
    ownerId: string,
    name: string,
    createdAt: string | null,
    updatedAt: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      items:  Array< {
        __typename: "Photo",
        id: string,
        createdAt: string | null,
        updatedAt: string | null,
        album:  {
          __typename: "Album",
          id: string,
          owner: string,
          ownerId: string,
          name: string,
          createdAt: string | null,
          updatedAt: string | null,
          photos:  {
            __typename: "ModelPhotoConnection",
            nextToken: string | null,
          } | null,
        } | null,
        fullsize:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        },
        thumbnail:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        } | null,
        contentType: string | null,
        gps:  {
          __typename: "GPS",
          latitude: string,
          longitude: string,
          altitude: number,
        } | null,
        height: number | null,
        width: number | null,
        size: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum:  {
    __typename: "Album",
    id: string,
    owner: string,
    ownerId: string,
    name: string,
    createdAt: string | null,
    updatedAt: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      items:  Array< {
        __typename: "Photo",
        id: string,
        createdAt: string | null,
        updatedAt: string | null,
        album:  {
          __typename: "Album",
          id: string,
          owner: string,
          ownerId: string,
          name: string,
          createdAt: string | null,
          updatedAt: string | null,
          photos:  {
            __typename: "ModelPhotoConnection",
            nextToken: string | null,
          } | null,
        } | null,
        fullsize:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        },
        thumbnail:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        } | null,
        contentType: string | null,
        gps:  {
          __typename: "GPS",
          latitude: string,
          longitude: string,
          altitude: number,
        } | null,
        height: number | null,
        width: number | null,
        size: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePhotoMutationVariables = {
  input: CreatePhotoInput,
  condition?: ModelPhotoConditionInput | null,
};

export type CreatePhotoMutation = {
  createPhoto:  {
    __typename: "Photo",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    album:  {
      __typename: "Album",
      id: string,
      owner: string,
      ownerId: string,
      name: string,
      createdAt: string | null,
      updatedAt: string | null,
      photos:  {
        __typename: "ModelPhotoConnection",
        items:  Array< {
          __typename: "Photo",
          id: string,
          createdAt: string | null,
          updatedAt: string | null,
          album:  {
            __typename: "Album",
            id: string,
            owner: string,
            ownerId: string,
            name: string,
            createdAt: string | null,
            updatedAt: string | null,
          } | null,
          fullsize:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          },
          thumbnail:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          } | null,
          contentType: string | null,
          gps:  {
            __typename: "GPS",
            latitude: string,
            longitude: string,
            altitude: number,
          } | null,
          height: number | null,
          width: number | null,
          size: number | null,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    fullsize:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    },
    thumbnail:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
    contentType: string | null,
    gps:  {
      __typename: "GPS",
      latitude: string,
      longitude: string,
      altitude: number,
    } | null,
    height: number | null,
    width: number | null,
    size: number | null,
    owner: string | null,
  } | null,
};

export type DeletePhotoMutationVariables = {
  input: DeletePhotoInput,
  condition?: ModelPhotoConditionInput | null,
};

export type DeletePhotoMutation = {
  deletePhoto:  {
    __typename: "Photo",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    album:  {
      __typename: "Album",
      id: string,
      owner: string,
      ownerId: string,
      name: string,
      createdAt: string | null,
      updatedAt: string | null,
      photos:  {
        __typename: "ModelPhotoConnection",
        items:  Array< {
          __typename: "Photo",
          id: string,
          createdAt: string | null,
          updatedAt: string | null,
          album:  {
            __typename: "Album",
            id: string,
            owner: string,
            ownerId: string,
            name: string,
            createdAt: string | null,
            updatedAt: string | null,
          } | null,
          fullsize:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          },
          thumbnail:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          } | null,
          contentType: string | null,
          gps:  {
            __typename: "GPS",
            latitude: string,
            longitude: string,
            altitude: number,
          } | null,
          height: number | null,
          width: number | null,
          size: number | null,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    fullsize:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    },
    thumbnail:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
    contentType: string | null,
    gps:  {
      __typename: "GPS",
      latitude: string,
      longitude: string,
      altitude: number,
    } | null,
    height: number | null,
    width: number | null,
    size: number | null,
    owner: string | null,
  } | null,
};

export type UpdatePhotoMutationVariables = {
  input: UpdatePhotoInput,
  condition?: ModelPhotoConditionInput | null,
};

export type UpdatePhotoMutation = {
  updatePhoto:  {
    __typename: "Photo",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    album:  {
      __typename: "Album",
      id: string,
      owner: string,
      ownerId: string,
      name: string,
      createdAt: string | null,
      updatedAt: string | null,
      photos:  {
        __typename: "ModelPhotoConnection",
        items:  Array< {
          __typename: "Photo",
          id: string,
          createdAt: string | null,
          updatedAt: string | null,
          album:  {
            __typename: "Album",
            id: string,
            owner: string,
            ownerId: string,
            name: string,
            createdAt: string | null,
            updatedAt: string | null,
          } | null,
          fullsize:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          },
          thumbnail:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          } | null,
          contentType: string | null,
          gps:  {
            __typename: "GPS",
            latitude: string,
            longitude: string,
            altitude: number,
          } | null,
          height: number | null,
          width: number | null,
          size: number | null,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    fullsize:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    },
    thumbnail:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
    contentType: string | null,
    gps:  {
      __typename: "GPS",
      latitude: string,
      longitude: string,
      altitude: number,
    } | null,
    height: number | null,
    width: number | null,
    size: number | null,
    owner: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum:  {
    __typename: "Album",
    id: string,
    owner: string,
    ownerId: string,
    name: string,
    createdAt: string | null,
    updatedAt: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      items:  Array< {
        __typename: "Photo",
        id: string,
        createdAt: string | null,
        updatedAt: string | null,
        album:  {
          __typename: "Album",
          id: string,
          owner: string,
          ownerId: string,
          name: string,
          createdAt: string | null,
          updatedAt: string | null,
          photos:  {
            __typename: "ModelPhotoConnection",
            nextToken: string | null,
          } | null,
        } | null,
        fullsize:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        },
        thumbnail:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        } | null,
        contentType: string | null,
        gps:  {
          __typename: "GPS",
          latitude: string,
          longitude: string,
          altitude: number,
        } | null,
        height: number | null,
        width: number | null,
        size: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      owner: string,
      ownerId: string,
      name: string,
      createdAt: string | null,
      updatedAt: string | null,
      photos:  {
        __typename: "ModelPhotoConnection",
        items:  Array< {
          __typename: "Photo",
          id: string,
          createdAt: string | null,
          updatedAt: string | null,
          album:  {
            __typename: "Album",
            id: string,
            owner: string,
            ownerId: string,
            name: string,
            createdAt: string | null,
            updatedAt: string | null,
          } | null,
          fullsize:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          },
          thumbnail:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          } | null,
          contentType: string | null,
          gps:  {
            __typename: "GPS",
            latitude: string,
            longitude: string,
            altitude: number,
          } | null,
          height: number | null,
          width: number | null,
          size: number | null,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPhotoQueryVariables = {
  id: string,
};

export type GetPhotoQuery = {
  getPhoto:  {
    __typename: "Photo",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    album:  {
      __typename: "Album",
      id: string,
      owner: string,
      ownerId: string,
      name: string,
      createdAt: string | null,
      updatedAt: string | null,
      photos:  {
        __typename: "ModelPhotoConnection",
        items:  Array< {
          __typename: "Photo",
          id: string,
          createdAt: string | null,
          updatedAt: string | null,
          album:  {
            __typename: "Album",
            id: string,
            owner: string,
            ownerId: string,
            name: string,
            createdAt: string | null,
            updatedAt: string | null,
          } | null,
          fullsize:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          },
          thumbnail:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          } | null,
          contentType: string | null,
          gps:  {
            __typename: "GPS",
            latitude: string,
            longitude: string,
            altitude: number,
          } | null,
          height: number | null,
          width: number | null,
          size: number | null,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    fullsize:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    },
    thumbnail:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
    contentType: string | null,
    gps:  {
      __typename: "GPS",
      latitude: string,
      longitude: string,
      altitude: number,
    } | null,
    height: number | null,
    width: number | null,
    size: number | null,
    owner: string | null,
  } | null,
};

export type ListPhotosQueryVariables = {
  filter?: ModelPhotoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPhotosQuery = {
  listPhotos:  {
    __typename: "ModelPhotoConnection",
    items:  Array< {
      __typename: "Photo",
      id: string,
      createdAt: string | null,
      updatedAt: string | null,
      album:  {
        __typename: "Album",
        id: string,
        owner: string,
        ownerId: string,
        name: string,
        createdAt: string | null,
        updatedAt: string | null,
        photos:  {
          __typename: "ModelPhotoConnection",
          items:  Array< {
            __typename: "Photo",
            id: string,
            createdAt: string | null,
            updatedAt: string | null,
            contentType: string | null,
            height: number | null,
            width: number | null,
            size: number | null,
            owner: string | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
      } | null,
      fullsize:  {
        __typename: "S3Object",
        region: string,
        bucket: string,
        key: string,
      },
      thumbnail:  {
        __typename: "S3Object",
        region: string,
        bucket: string,
        key: string,
      } | null,
      contentType: string | null,
      gps:  {
        __typename: "GPS",
        latitude: string,
        longitude: string,
        altitude: number,
      } | null,
      height: number | null,
      width: number | null,
      size: number | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateAlbumSubscriptionVariables = {
  owner: string,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum:  {
    __typename: "Album",
    id: string,
    owner: string,
    ownerId: string,
    name: string,
    createdAt: string | null,
    updatedAt: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      items:  Array< {
        __typename: "Photo",
        id: string,
        createdAt: string | null,
        updatedAt: string | null,
        album:  {
          __typename: "Album",
          id: string,
          owner: string,
          ownerId: string,
          name: string,
          createdAt: string | null,
          updatedAt: string | null,
          photos:  {
            __typename: "ModelPhotoConnection",
            nextToken: string | null,
          } | null,
        } | null,
        fullsize:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        },
        thumbnail:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        } | null,
        contentType: string | null,
        gps:  {
          __typename: "GPS",
          latitude: string,
          longitude: string,
          altitude: number,
        } | null,
        height: number | null,
        width: number | null,
        size: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateAlbumSubscriptionVariables = {
  owner: string,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum:  {
    __typename: "Album",
    id: string,
    owner: string,
    ownerId: string,
    name: string,
    createdAt: string | null,
    updatedAt: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      items:  Array< {
        __typename: "Photo",
        id: string,
        createdAt: string | null,
        updatedAt: string | null,
        album:  {
          __typename: "Album",
          id: string,
          owner: string,
          ownerId: string,
          name: string,
          createdAt: string | null,
          updatedAt: string | null,
          photos:  {
            __typename: "ModelPhotoConnection",
            nextToken: string | null,
          } | null,
        } | null,
        fullsize:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        },
        thumbnail:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        } | null,
        contentType: string | null,
        gps:  {
          __typename: "GPS",
          latitude: string,
          longitude: string,
          altitude: number,
        } | null,
        height: number | null,
        width: number | null,
        size: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteAlbumSubscriptionVariables = {
  owner: string,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum:  {
    __typename: "Album",
    id: string,
    owner: string,
    ownerId: string,
    name: string,
    createdAt: string | null,
    updatedAt: string | null,
    photos:  {
      __typename: "ModelPhotoConnection",
      items:  Array< {
        __typename: "Photo",
        id: string,
        createdAt: string | null,
        updatedAt: string | null,
        album:  {
          __typename: "Album",
          id: string,
          owner: string,
          ownerId: string,
          name: string,
          createdAt: string | null,
          updatedAt: string | null,
          photos:  {
            __typename: "ModelPhotoConnection",
            nextToken: string | null,
          } | null,
        } | null,
        fullsize:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        },
        thumbnail:  {
          __typename: "S3Object",
          region: string,
          bucket: string,
          key: string,
        } | null,
        contentType: string | null,
        gps:  {
          __typename: "GPS",
          latitude: string,
          longitude: string,
          altitude: number,
        } | null,
        height: number | null,
        width: number | null,
        size: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePhotoSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePhotoSubscription = {
  onCreatePhoto:  {
    __typename: "Photo",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    album:  {
      __typename: "Album",
      id: string,
      owner: string,
      ownerId: string,
      name: string,
      createdAt: string | null,
      updatedAt: string | null,
      photos:  {
        __typename: "ModelPhotoConnection",
        items:  Array< {
          __typename: "Photo",
          id: string,
          createdAt: string | null,
          updatedAt: string | null,
          album:  {
            __typename: "Album",
            id: string,
            owner: string,
            ownerId: string,
            name: string,
            createdAt: string | null,
            updatedAt: string | null,
          } | null,
          fullsize:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          },
          thumbnail:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          } | null,
          contentType: string | null,
          gps:  {
            __typename: "GPS",
            latitude: string,
            longitude: string,
            altitude: number,
          } | null,
          height: number | null,
          width: number | null,
          size: number | null,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    fullsize:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    },
    thumbnail:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
    contentType: string | null,
    gps:  {
      __typename: "GPS",
      latitude: string,
      longitude: string,
      altitude: number,
    } | null,
    height: number | null,
    width: number | null,
    size: number | null,
    owner: string | null,
  } | null,
};

export type OnUpdatePhotoSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePhotoSubscription = {
  onUpdatePhoto:  {
    __typename: "Photo",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    album:  {
      __typename: "Album",
      id: string,
      owner: string,
      ownerId: string,
      name: string,
      createdAt: string | null,
      updatedAt: string | null,
      photos:  {
        __typename: "ModelPhotoConnection",
        items:  Array< {
          __typename: "Photo",
          id: string,
          createdAt: string | null,
          updatedAt: string | null,
          album:  {
            __typename: "Album",
            id: string,
            owner: string,
            ownerId: string,
            name: string,
            createdAt: string | null,
            updatedAt: string | null,
          } | null,
          fullsize:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          },
          thumbnail:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          } | null,
          contentType: string | null,
          gps:  {
            __typename: "GPS",
            latitude: string,
            longitude: string,
            altitude: number,
          } | null,
          height: number | null,
          width: number | null,
          size: number | null,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    fullsize:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    },
    thumbnail:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
    contentType: string | null,
    gps:  {
      __typename: "GPS",
      latitude: string,
      longitude: string,
      altitude: number,
    } | null,
    height: number | null,
    width: number | null,
    size: number | null,
    owner: string | null,
  } | null,
};

export type OnDeletePhotoSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePhotoSubscription = {
  onDeletePhoto:  {
    __typename: "Photo",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    album:  {
      __typename: "Album",
      id: string,
      owner: string,
      ownerId: string,
      name: string,
      createdAt: string | null,
      updatedAt: string | null,
      photos:  {
        __typename: "ModelPhotoConnection",
        items:  Array< {
          __typename: "Photo",
          id: string,
          createdAt: string | null,
          updatedAt: string | null,
          album:  {
            __typename: "Album",
            id: string,
            owner: string,
            ownerId: string,
            name: string,
            createdAt: string | null,
            updatedAt: string | null,
          } | null,
          fullsize:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          },
          thumbnail:  {
            __typename: "S3Object",
            region: string,
            bucket: string,
            key: string,
          } | null,
          contentType: string | null,
          gps:  {
            __typename: "GPS",
            latitude: string,
            longitude: string,
            altitude: number,
          } | null,
          height: number | null,
          width: number | null,
          size: number | null,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    fullsize:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    },
    thumbnail:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
    contentType: string | null,
    gps:  {
      __typename: "GPS",
      latitude: string,
      longitude: string,
      altitude: number,
    } | null,
    height: number | null,
    width: number | null,
    size: number | null,
    owner: string | null,
  } | null,
};
