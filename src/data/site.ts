type Extracurricular = {
	title: string;
	duration: string;
	description: string;
};

type Profile = {
	name: string;
	location: string;
	email: string;
	phone: string;
	github: string;
	tagline: string;
	bio: string[];
	aiMotivation: string;
	careerJourney: string[];
	extracurriculars: Extracurricular[];
	interests: string[];
	skills: string[];
};

export const profile: Profile = {
	name: 'T. Hareshjaa Pillay',
	location: 'Seychelles',
	email: 'hareshjaa.pillay@cwseychelles.com',
	phone: '284028',
	github: 'https://github.com/HP-create123',
	tagline:
		'Aspiring AI developer building tools that simplify data analysis and automate real-world workflows.',
	bio: [
		'Aspiring AI developer from Seychelles with a strong interest in building intelligent tools that help people.',
		'Passionate about artificial intelligence, automation, and software systems that simplify complex tasks.',
		'Experienced in developing dashboards, AI-powered applications, and automation workflows while working in a telecommunications company\'s digital development department.'
	],
	aiMotivation:
		'I enjoy using AI personally and I want to build AI apps that help people with everyday life decisions through specific, practical answers instead of broad generic responses.',
	careerJourney: [
		'I first wanted to become a teacher, then considered accounting, and later my parents encouraged me toward a specialized medical path such as dentistry.',
		'My direction changed when I discovered artificial intelligence in my IGCSE Computer Science coursebook and became deeply interested in the field.',
		'From that point, I decided to build my future career around AI and apply for a Bachelor of Science in Artificial Intelligence.'
	],
	extracurriculars: [
		{
			title: 'Vice President, Peer Educators',
			duration: '3 years',
			description:
				'Supported students as a trusted peer support leader, helping classmates who needed guidance and preferred student mentors before approaching school counselors.'
		},
		{
			title: 'Essay Writing Competition - 2nd Place',
			duration: '2021',
			description: 'Won second place at school-level essay writing competition.'
		},
		{
			title: 'Indian High Commission Seychelles - Women\'s Day Essay Participation',
			duration: 'Participation',
			description:
				'Participated in the Women\'s Day essay writing competition organized by the Indian High Commission in Seychelles.'
		}
	],
	interests: [
		'Artificial Intelligence',
		'AI application development',
		'Automation workflows',
		'Technology that helps people',
		'Software development'
	],
	skills: ['Python', 'Streamlit', 'n8n', 'OpenCode', 'VS Code', 'GitHub', 'Automation', 'AI Tools']
};

export const experience = {
	companyType: 'Telecommunications',
	department: 'Digital Development / AI',
	duration: 'December 2025 - September 2026',
	workPerformed: [
		'Testing internal platforms',
		'Designing system interfaces',
		'Working with AI tools',
		'Building automation workflows'
	],
	toolsUsed: ['n8n', 'VS Code', 'Antigravity', 'OpenCode', 'Streamlit', 'GitHub']
};

export const education = {
	aLevels: {
		school: 'Independent School Seychelles',
		subjects: [
			{ name: 'Mathematics', grade: 'D' },
			{ name: 'Chemistry', grade: 'D' },
			{ name: 'Physics', grade: 'D' }
		]
	},
	igcse: [
		{ name: 'Physics', grade: 'A' },
		{ name: 'Chemistry', grade: 'A' },
		{ name: 'Mathematics', grade: 'B' },
		{ name: 'Computer Science', grade: 'B' },
		{ name: 'Biology', grade: 'B' },
		{ name: 'History', grade: 'C' },
		{ name: 'English First Language', grade: 'C' },
		{ name: 'English Second Language', grade: 'A (Speaking Level 2)' },
		{ name: 'French Foreign Language', grade: 'A+' }
	],
	ielts: '7.0'
};
