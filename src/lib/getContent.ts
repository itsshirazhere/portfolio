import {
    person,
    social,
    home,
    about,
    services,
    blog,
    work,
    gallery,
    newsletter,
} from '@/app/resources/content';

export async function getContent() {
    return { person, social, home, about, services, blog, work, gallery, newsletter };
}
