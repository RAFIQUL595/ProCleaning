const getAllTestimonials = async () => {
    const res = await fetch('https://pro-cleaning-server.vercel.app/reviews', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};

export default getAllTestimonials;