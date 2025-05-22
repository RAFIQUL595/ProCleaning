const getBlogById = async (_id) => {

    const res = await fetch(`https://pro-cleaning-server.vercel.app/blog/${_id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch blog with ID ${_id}`);
    }

    const blog = await res.json();
    return blog;
};

export default getBlogById;