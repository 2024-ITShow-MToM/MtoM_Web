import Category from "../components/thinking/Category";

function CategoryPage() {

    const categoryData = [
        {
            imoji: '👔',
            text: '취업',
            content: '취업 분야  /  포토폴리오' + 
            '\n이력서  /  취업처'
        },

        {
            imoji: '🎓',
            text: '진학',
            content: '재직자 특별전형  /  조기 취업형과'
        },

        {
            imoji: '🏫',
            text: '학교생활',
            content: '동아리 /  학생회'
        },

        {
            imoji: '🏆',
            text: '외부활동',
            content: '경진대회  / 기능대회 등'
        }
    ]

    return (
        <Category categoryData={categoryData} />
    )
}

export default CategoryPage;