import Grade from "../components/thinking/Grade";

function GradePage() {

    const gradeData = [
        {
            text: '1',
            grade: '1학년'
        },

        {
            text: '2',
            grade: '2학년'
        },

        {
            text: '3',
            grade: '3학년'
        },

        {
            text: 'N',
            grade: '기타'
        },
    ]

    return (
        <Grade gradeData={gradeData} />
    )
}

export default GradePage;