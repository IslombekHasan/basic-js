module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  return members.reduce((accumulator, member) => {
    if ((typeof member) == 'string')
      accumulator.push(member.trim().toUpperCase()[0])
    return accumulator
  }, []).sort((a, b) => a.localeCompare(b)).join('')
};