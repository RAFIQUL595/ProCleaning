const getAllBlogs = async () => {
    const res = await fetch('http://localhost:9000/blogs', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};

export default getAllBlogs;