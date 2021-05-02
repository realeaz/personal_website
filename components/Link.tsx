import Link from 'next/link';
import React from 'react';

export default function CustomLink({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<Link href={href} passHref>
			<a>{children}</a>
		</Link>
	);
}