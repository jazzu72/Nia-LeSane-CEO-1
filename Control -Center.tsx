export default function PauseControlCenter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PauseStatusWidget />
      <FounderPauseButton />
      <PauseHistory />
      {/* Add word cloud, voting bar, timeline */}
    </div>
  );
}
