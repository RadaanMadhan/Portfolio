import Link from 'next/link';

async function getProjects() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/projects/records?page=1&perPage=30', {cache: 'no-store'});
    const data = await res.json();
    return data?.items as Project[];
}

export default async function projects (){
    const projects = await getProjects(); 

    return(
        <div>
            <h1>
                Projects
            </h1>
            <div>
                {projects?.map((project) => {
                    return <BuildProject key={project.id} project={project}/>;
                })}
            </div>
        </div>
    );
}

interface Project {
    id: string;
    title: string;
    description: string;
    created: string;
}


interface ProjectProps {
    project: Project;
}

const BuildProject :React.FC<ProjectProps> = ({ project }) => {
    const {id, title, description, created} = project || {};

    return (
        <div className='project-tile'>
        <Link href = {`/projects/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{description}</h5>
                <p>{created}</p>
            </div>
        </Link>
        </div>
    );
};