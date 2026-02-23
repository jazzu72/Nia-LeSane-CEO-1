useEffect(() => {
  const channel = supabase.channel('pause-state')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'pause_state' }, payload => {
      setStatus(payload.new);
    })
    .subscribe();
  return () => { supabase.removeChannel(channel); };
}, []);
