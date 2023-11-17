import {useMatches} from "react-router-dom";

export default function Breadcrumbs () {
    let matches = useMatches();
    let crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match)=> match.handle.crumb(match.data));

    return (
        <>
            {/*Don't display on homepage... */}
            {(crumbs.length > 1) && (
                <div className="
                breadcrumbs
                text-sm text-gray
                max-h-fit
                fixed right-0 z-40
                mt-2 mr-8 mb-0
                {/*glassmorphism*/}
                bg-
                ">

                    <ul>
                        {crumbs.map((crumb, index) => (
                            <li key={index}>{crumb}</li>
                        ))}
                    </ul>
                </div>
                )
            }
        </>
    )
}
