export interface LayoutProps {
	children: React.ReactNode;
	params: { [key: string]: string };
}

export interface PageProps {
	params: { [key: string]: string };
	searchParams: { [key: string]: string | string[] | undefined };
}
