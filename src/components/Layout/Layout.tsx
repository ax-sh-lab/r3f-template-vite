import React from 'react';

export type LayoutProps = {}

export default function Layout({children}: React.ComponentProps<any>) {
    return (<div className="Layout">
        {children}
    </div>);
}
