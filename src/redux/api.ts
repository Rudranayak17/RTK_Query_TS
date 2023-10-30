import {createApi ,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const myApi=createApi({
    reducerPath:"myApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),
    tagTypes:["Posts"],
    endpoints:(buider)=>({
        getPost:buider.query<postType[],string>({query:()=>"posts",providesTags:["Posts"]}),
        newPost:buider.mutation<postType,postType>({
            query:(post)=>({
                url:"posts",method:"POST",
                body:post
            }),
            invalidatesTags:["Posts"]
        })
    })
})
export const {useGetPostQuery,useNewPostMutation}=myApi


