import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './file-explorer.scss';

function File(props) {
    const index = props.index || 1;
    let resolved = useResolvedPath(props.href);
    let match = useMatch({ path: resolved.pathname, end: true });

    const matchedStyle = match ? { backgroundColor: '#40394a' } : {};

    return (
        <Link className="link d-flex" style={{ paddingLeft: index * 16, ...matchedStyle }} active to={props.href}>{props.name}</Link>
    );
}

function Folder(props) {
    const index = props.index || 1;
    return (
        <div>
            <div className="folder">
                <span style={{ color: '#4fe4b8', marginLeft: index * 8 }}>{'>'} {props.name}</span>
            </div>
            {props.items.map(item => item.isFolder ?
                <Folder key={item.name} index={index + 1} name={item.name} items={item.items} /> :
                <File key={item.name} index={index} name={item.name} href={item.href} />)}
        </div>
    );
}

function FileExplorer() {
    const items = [
        {
            isFolder: 1,
            name: 'src',
            items: [
                {
                    isFolder: 0,
                    name: 'about.jsx',
                    href: '/'
                },
                {
                    isFolder: 0,
                    name: 'work.jsx',
                    href: '/work'
                },
                {
                    isFolder: 1,
                    name: 'pages',
                    items: [
                        {
                            isFolder: 0,
                            name: 'app.jsx',
                            href: '/something-else'
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <>
            {items.map(item => item.isFolder ? <Folder key={item.name} name={item.name} items={item.items} /> : <File key={item.name} name={item.name} />)}
        </>
        // <ul>
        //     <li>
        //         <Link to="/">about.jsx</Link>
        //     </li>
        //     <li>
        //         <Link to="/work">work.jsx</Link>
        //     </li>
        //     <li>
        //         <ul>
        //             <li>
        //                 <Link to="/">about.jsx</Link>
        //             </li>
        //             <li>
        //                 <Link to="/work">work.jsx</Link>
        //             </li>
        //             <li>
        //                 <ul>
        //                     <li>
        //                         <Link to="/">about.jsx</Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/work">work.jsx</Link>
        //                     </li>
        //                 </ul>
        //             </li>

        //         </ul>
        //     </li>

        // </ul>
    );
}

export default FileExplorer;