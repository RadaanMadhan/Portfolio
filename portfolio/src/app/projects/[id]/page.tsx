async function getProject(projectId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/projects/records/${projectId}`, 
        {
            next: { revalidate: 10 },
        }
    );
    const data = await res.json();
    return data;
}

export default async function ProjectPage({ params }: any ) {
    //params is a keyword that autmatically gets the dynamic route (project.id in this case, stores as  { id: xyz})
    const { id } = await params;

    const project = await getProject(id);

    return (
    <div>
        <h1>projects/ {project.id}</h1>
        <div>
            <h2>{project.title}</h2>
            <h5>{project.description}</h5>
            <p>{project.created}</p>
        </div>
    </div>
    );
} 