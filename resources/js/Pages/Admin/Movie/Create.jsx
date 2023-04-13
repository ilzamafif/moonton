import Authenticated from "@/Layouts/Authenticated/Index";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";

import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />
            <InputError errors={errors} />
            <form onSubmit={submit}>
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    type="text"
                    name="name"
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                />
                <InputLabel
                    htmlFor="category"
                    value="Category"
                    className="mt-4"
                />
                <TextInput
                    type="text"
                    name="category"
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                />
                <InputLabel
                    htmlFor="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <TextInput
                    type="text"
                    name="video_url"
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                />
                <InputLabel
                    htmlFor="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                />
                <InputLabel htmlFor="rating" value="Rating" className="mt-4" />
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    onChange={handleOnChange}
                    placeholder="Enter the rating of the movie"
                    isError={errors.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                    <InputLabel
                        htmlFor="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <PrimaryButton
                    type="submit"
                    className="mt-4"
                    processing={processing}
                >
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
