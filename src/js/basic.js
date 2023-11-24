export default function specialAttacs(object) {
  const {special: specialAttacs} = object;

  for (const attack in specialAttacs) {
    if (!specialAttacs[attack].hasOwnProperty('description')) {
      specialAttacs[attack].description = 'Описание недоступно';
    }
  }

  return specialAttacs;
}