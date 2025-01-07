import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import Navbar from "@/Components/Navbar";
import Styles from "@/Components/Profile.module.css";
import Foote from "@/Components/Foote";

export default function Edit({ mustVerifyEmail, status, userResources }) {
    return (
        <>
            <Navbar />
            <main>
                <Head title="Profile" />
                <div className={Styles.d}></div>

                <div className="py-12">
                    <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>

                <section>
                    <div className="mt-10">
                        <h2 className="text-xl font-bold">
                            Your Uploaded Resources
                        </h2>
                        <div className="mt-4">
                            {userResources.length > 0 ? (
                                <table className="min-w-full table-auto border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2">
                                                Title
                                            </th>
                                            <th className="border px-4 py-2">
                                                Description
                                            </th>
                                            <th className="border px-4 py-2">
                                                Type
                                            </th>
                                            <th className="border px-4 py-2">
                                                Tags
                                            </th>
                                            <th className="border px-4 py-2">
                                                Date Uploaded
                                            </th>
                                            <th className="border px-4 py-2">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userResources.map(
                                            (resource, index) => {
                                                const deleteUrl = `/resources/delete/${resource.id}`;
                                                console.log(deleteUrl); // Check if the URL is correct

                                                return (
                                                    <tr
                                                        key={index}
                                                        className="text-center"
                                                    >
                                                        <td className="border px-4 py-2">
                                                            {resource.title}
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {
                                                                resource.description
                                                            }
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {resource.type}
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {Array.isArray(
                                                                resource.tags
                                                            )
                                                                ? resource.tags.join(
                                                                      ", "
                                                                  )
                                                                : resource.tags}
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {new Date(
                                                                resource.created_at
                                                            ).toLocaleDateString()}
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            <form
                                                                action={
                                                                    deleteUrl
                                                                }
                                                                method="POST"
                                                                onSubmit={(
                                                                    e
                                                                ) => {
                                                                    if (
                                                                        !confirm(
                                                                            "Are you sure you want to delete this resource?"
                                                                        )
                                                                    ) {
                                                                        e.preventDefault();
                                                                    }
                                                                }}
                                                            >
                                                                <input
                                                                    type="hidden"
                                                                    name="_token"
                                                                    value={
                                                                        document.querySelector(
                                                                            'meta[name="csrf-token"]'
                                                                        )
                                                                            .content
                                                                    }
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="_method"
                                                                    value="DELETE"
                                                                />
                                                                <button
                                                                    type="submit"
                                                                    className="text-red-500 hover:underline"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </form>
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        )}
                                    </tbody>
                                </table>
                            ) : (
                                <p>You have not uploaded any resources yet.</p>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Foote />
        </>
    );
}
