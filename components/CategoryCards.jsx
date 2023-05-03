import OutlinedCard from './OutlinedCard';

export default function CategoryCards() {
  const categories = [
    {
      imageUrl: '/home_card_projects.png',
      when: '1pm, 29 Apr 2023',
      where: 'i3 Lab (1.605)',
      message: 'Join our exciting projects',
      cardTitle: 'Projects',
      cta: 'Learn More',
    },
    {
      imageUrl: '/home_card_events.png',
      when: '1pm, 29 Apr 2023',
      where: 'i3 Lab (1.605)',
      message:
        'Learn to create your very own VR game and tinker with VR equipment',
      cardTitle: 'VR Events',
      cta: 'Learn More',
    },
    {
      imageUrl: '/home_card_merch.png',
      when: '1pm, 29 Apr 2023',
      where: 'i3 Lab (1.605)',
      message: 'Get limited 3DC merch',
      cardTitle: 'Merch',
      cta: 'Learn More',
    },
    {
      imageUrl: '/home_card_student_lead_workshops.png',
      when: '1pm, 29 Apr 2023',
      where: 'i3 Lab (1.605)',
      message: 'Join our React workshop',
      cardTitle: 'Learn React!',
      cta: 'Learn More',
    },
  ];
  return (
    <>
      <div className="flex w-full place-content-center">
        <div className="grid gap-4 grid-cols-4 justify-center mt-10 mx-10">
          {categories.map((category) => (
            <OutlinedCard {...category} />
          ))}
        </div>
      </div>
    </>
  );
}
