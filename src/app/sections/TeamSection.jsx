const TeamSection = () => {
  const teamMembers = [
    {
      image: "https://i.ibb.co/rRc8HPfs/unsplash-v3-Ol-BE6-fh-U.png",
      name: "Mark Henry",
      designation: "Owner",
    },
    {
      image: "https://i.ibb.co/rRc8HPfs/unsplash-v3-Ol-BE6-fh-U.png",
      name: "Mark Henry",
      designation: "Owner",
    },
    {
      image: "https://i.ibb.co/rRc8HPfs/unsplash-v3-Ol-BE6-fh-U.png",
      name: "Mark Henry",
      designation: "Owner",
    },
    {
      image: "https://i.ibb.co/rRc8HPfs/unsplash-v3-Ol-BE6-fh-U.png",
      name: "Mark Henry",
      designation: "Owner",
    },
  ];
  return (
    <section className="relative">
      {/* Background Section */}
      <div
        className="relative bg-red-600 h-96"
        style={{
          backgroundImage: "url('/team-member-tumb.png')",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#AD1519D9]/80"></div>
        {/* Text in Background */}
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center text-white px-2 pb-6">
          <h1 className="text-4xl font-bold mb-4">Team Member</h1>
          <p className="text-xl text-gray-200">
            Meet our talented and dedicated team members who drive our success
            and deliver exceptional results.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-8 px-6 ">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 -mt-24">
          {/* Card 1 */}
          {teamMembers?.map((member, idx) => (
            <div className="rounded shadow-sm z-50" key={idx}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover rounded-t-lg"
              />
              <div className="mt-2 p-3 text-center">
                <h2 className="text-xl font-bold">{member.name}</h2>
                <p className="text-gray-600">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
