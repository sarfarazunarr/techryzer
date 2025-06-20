'use client';

import Form from 'next/form';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
const Comment = ({ blogId }: {blogId: string}) => {
    const [comments, setComments] = useState([]);

    const fetchComments = useCallback(async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog/comment?blogId=${blogId}`);
        const data = await res.json();
        setComments(data);
    }, [blogId]); // Add blogId as a dependency

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    async function postComment(data:FormData) {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/blog/comment`, {
            method: "POST",
            body: data
        });
        fetchComments(); // Refetch comments after posting
    }
    return (
        <div className='flex flex-col bg-gray-800 p-5 md:p-10 gap-y-2 w-full md:w-1/2'>
            <h3 className='text-xl md:text-2xl font-semibold font-outfit text-lightwhite'>Post Comment</h3>
            <Form action={postComment} className="grid grid-cols-5 gap-2">
                <input type="text" defaultValue={blogId} className='hidden' name="blogId" id="blogId" />
                <input type="text" className='col-span-5 bg-transparent border border-white px-3 py-2 rounded-md text-lightwhite font-normal font-manrop' name="username" id="username" placeholder='Type Name here...' />
                <input type="text" className='col-span-3 bg-transparent border border-white px-3 py-2 text-lightwhite rounded-md font-normal font-manrop' name="comment" id="comment" placeholder='Type Comment here...' />
                <button type='submit' className='px-3 py-2 rounded-full col-span-2 bg-darkblue text-white hover:bg-white hover:text-darkblue transition-colors duration-150'>Comment</button>
            </Form>

            <div className='py-4'>
                <h3 className='text-xl md:text-2xl font-semibold font-outfit text-lightwhite'>Comments</h3>
                <div className='mt-4 flex flex-col gap-y-2'>
                    {comments.length > 0 && comments.map((comment: {username: string, comment: string}, index: number) => (
                        <div key={index} className='bg-gray-900 p-3 rounded-md'>
                            <div className='flex flex-start gap-2 items-center'>
                                <Image src={"/username.jpg"} width={200} height={100} className='size-10 rounded-full' alt='user' />
                                <div>
                                    <h6 className='md:text-[18px] font-semibold text-white'>{comment.username}</h6>
                                    <p className='font-normal text-sm text-lightwhite font-manrop'>{comment.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {comments.length === 0 && <p className='font-manrop text-lightwhite'>No comments yet</p>}
                </div>
            </div>
        </div>
    );
};

export default Comment;
