let movieId = 1;
let imageId = 1;

export let movies = [
    {
        id: movieId++,
        title: 'Paw Patrol',
        images: [
            {
                id: imageId++,
                name: 'Chase',
                url: 'http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2016/06/paw-patrol-chase-coloring-page.png'
            },
            {
                id: imageId++,
                name: 'Chase',
                url: 'http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2016/06/all-paw-patrol-characters-coloring-page.png'
            },
            {
                id: imageId++,
                name: 'Sky',
                url: 'http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2016/06/paw-patrol-skye-coloring-page.png'
            }
        ]
    },
    {
        id: movieId++,
        title: 'Pokemon',
        images: [
            {
                id: imageId++,
                name: 'Pikachu',
                url: 'http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2015/07/025-pikachu-coloring-page.png'
            },
            {
                id: imageId++,
                name: 'Pikachu',
                url: 'http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2016/07/pokemon-go-pikachu-025-coloring-page.png'
            },
            {
                id: imageId++,
                name: 'Ash',
                url: 'http://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2015/07/ash-ketchum-coloring-page.png'
            }
        ]
    }
]

export default movies;