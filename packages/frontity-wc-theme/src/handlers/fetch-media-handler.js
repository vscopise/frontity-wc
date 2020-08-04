export const fetchMediaHandler = {
    name: 'media',
    priority: 10,
    pattern: '/media/:id',
    func: async ({ params, state, libraries }) => {
        console.log('media handler')

        // 1. get media
        const response = await libraries.source.api.get({
            endpoint: `media/${params.id}`,
        });

        // 2. add media to state
        await libraries.source.populate({ response, state });
    }
}