

export const load = async () => {
    return {
        columns: [
            { id: 1, label: "todo", details: "List of task yet to be performed", bg: 'bg-[#ffcd15]', text: 'text-[#000]', color: '#ffcd15' },
            { id: 2, label: "done", details: "Already competed task", bg: 'bg-[#b6ed70]', text: 'text-[#000]', color: '#b6ed70' },
            { id: 3, label: "pending", details: "", bg: 'bg-[#ffa752]', text: 'text-[#fff]', color: '#ffa752' },
            { id: 4, label: "completed", details: "Approved or completed tasks", bg: 'bg-[#1be409]', text: 'text-[#000]', color: '#1be409' },
        ],
        cards: [
            {
                id: 1,
                label: "UI Design",
                details: "Design the ui for the E-com website",
                column: 1,
                tags: ["ui", "frontend"],
                assigned_to: [
                    { id: "1", avatar: '/avatars/av1.jpg', name: "Joseph akanbi", role: 'frontend developer' },
                    { id: "1", avatar: '/avatars/av2.jpg', name: "Ester jos", role: 'frontend developer' }
                ],
                expected_time: "30h"
            },
            {
                id: 2,
                label: "Add cookie",
                details: "Add cookie functionality to the backend of the payment service",
                column: 2,
                tags: ["ui", "frontend"],
                assigned_to: [
                    { id: "1", avatar: '/avatars/av1.jpg', name: "Joseph akanbi", role: 'frontend developer' },
                    { id: "1", avatar: '/avatars/av2.jpg', name: "Ester jos", role: 'frontend developer' }
                ],
                expected_time: "30h"
            },
            {
                id: 3,
                label: "Graphics",
                details: "Design graphics for the Fin-tech app website ads banners",
                column: 1,
                tags: ["ui", "frontend"],
                assigned_to: [
                    { id: "1", avatar: '/avatars/av4.jpg', name: "Joseph akanbi", role: 'frontend developer' },
                    { id: "1", avatar: '/avatars/av2.jpg', name: "Ester jos", role: 'frontend developer' }
                ],
                expected_time: "30h"
            },
            {
                id: 4,
                label: "UI",
                details: "Redesign the landing page for the Ai-resume maker saas project",
                column: 1,
                tags: ["ui", "frontend"],
                assigned_to: [
                    { id: "1", avatar: '/avatars/av4.jpg', name: "Joseph akanbi", role: 'frontend developer' },
                    { id: "1", avatar: '/avatars/av1.jpg', name: "Ester jos", role: 'frontend developer' }
                ],
                expected_time: "30h"
            },
            {
                id: 5,
                label: "Add Chat bot",
                details: "Add chat bot to the ai dev website to enable client easy communication",
                column: 3,
                tags: ["ui", "frontend"],
                assigned_to: [
                    { id: "1", avatar: '/avatars/av2.jpg', name: "Joseph akanbi", role: 'frontend developer' },
                    { id: "1", avatar: '/avatars/av3.jpg', name: "Ester jos", role: 'frontend developer' }
                ],
                expected_time: "30h"
            },
            {
                id: 6,
                label: "Graphics",
                details: "Design graphics for the AI app website ",
                column: 4,
                tags: ["ui", "frontend"],
                assigned_to: [
                    { id: "1", avatar: '/avatars/av3.jpg', name: "Joseph akanbi", role: 'frontend developer' },
                    { id: "1", avatar: '/avatars/av4.jpg', name: "Ester jos", role: 'frontend developer' }
                ],
                expected_time: "30h"
            },
        ]
    }
}