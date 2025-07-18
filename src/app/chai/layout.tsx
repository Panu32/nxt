



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
   
        <h2>inner chai layout</h2>
        {children}
     </>
  );
}
