type Props = {

    title : string
}

const Title = ({title} : Props) => {
    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 text-center mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text leading-tight">
                {title}
            </h2>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-0.5 sm:h-1 md:h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
    )
};


export default Title