
type Stores = {
    Coles: string,
    Woolies: string
}

type Service = {url: string, name: string, detail: string}

type Icons = {
    ExtractText: Service,
    Distance: Service,
    GoodPrice: Service
}

export const storeIcons: Stores = {
    Coles: "https://www.coles.com.au/content/dam/coles/coles-app/icons/coles-app-Icon-coles-truck-470x282px.svg",
    Woolies: "https://play-lh.googleusercontent.com/BFup0y0U_i4Gr69xrhowoHqE--sMVS40o86EbsGE7hAkIKiVjL0_R_T7sPQAuMX6NA"
}

export const icons: Icons = {
    ExtractText: {url: "https://miro.medium.com/v2/resize:fit:413/1*L5zVN_jPtO8CMqNYO6rlug.png", name: "Extract Data", detail: "Extract detail from Images",},
    Distance: {url: "https://cdn-icons-png.flaticon.com/512/3710/3710274.png", name: "Minimise Distance", detail: "Show the best store base on selected products",},
    GoodPrice: {url: "https://img.freepik.com/premium-vector/banner-i-recommend-is-red-with-thumb-up-vector-illustration_185004-402.jpg", name: "Best Price", detail: "Filter out the best price base on stores",}
}