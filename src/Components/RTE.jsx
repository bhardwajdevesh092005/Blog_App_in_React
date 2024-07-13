import { React, useId } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import conf from '../../conf';
function RTE({ default_value = "", name, control, label, l_classname = "", r_classname = "" }) {
    const id = useId();

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className={l_classname}>{label}</label>}
            <Controller
                className= {r_classname}
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                    apiKey='28lfq0dlx07k6o18ogqpogynxyyula0jb0i8ln8w6o2f00hx'
                    initialValue=""
                    init={{
                        initialValue:"",
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                        "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

export default RTE