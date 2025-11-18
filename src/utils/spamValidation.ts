/**
 * スパムメール検出のためのバリデーション関数
 */

/**
 * お問い合わせ内容がスパムかどうかを判定
 * @param message お問い合わせ内容
 * @returns スパムと判定された場合はエラーメッセージ、正常な場合はnull
 */
export function validateMessageContent(message: string): string | null {
  if (!message || message.trim().length === 0) {
    return '必須項目が入力されていません';
  }

  // 全角文字が含まれているかチェック
  const hasFullWidth = /[^\x00-\x7F]/.test(message);

  if (hasFullWidth) {
    // 全角文字が含まれている場合は正常と判定
    return null;
  }

  // 半角のみの場合、英語の文として成立しているかチェック
  // 半角スペースが2つ以上含まれているかチェック
  const spaceCount = (message.match(/ /g) || []).length;

  if (spaceCount < 2) {
    return '入力内容をご確認ください';
  }

  return null;
}

/**
 * 名前がスパムかどうかを判定
 * @param name 名前
 * @returns スパムと判定された場合true
 */
export function isSpamName(name: string): boolean {
  if (!name || name.trim().length === 0) {
    return false;
  }

  // 全角文字が含まれている場合は正常と判定
  const hasFullWidth = /[^\x00-\x7F]/.test(name);
  if (hasFullWidth) {
    return false;
  }

  // 半角のみで、かつランダムな文字列のように見える場合はスパムと判定
  // 大文字小文字が混在し、スペースがない、かつ10文字以上の場合
  const hasMixedCase = /[a-z]/.test(name) && /[A-Z]/.test(name);
  const hasNoSpace = !/ /.test(name);
  const isLong = name.length >= 10;

  return hasMixedCase && hasNoSpace && isLong;
}

/**
 * 会社名・組織名がスパムかどうかを判定
 * @param company 会社名・組織名
 * @returns スパムと判定された場合true
 */
export function isSpamCompany(company: string): boolean {
  if (!company || company.trim().length === 0) {
    return false;
  }

  // 全角文字が含まれている場合は正常と判定
  const hasFullWidth = /[^\x00-\x7F]/.test(company);
  if (hasFullWidth) {
    return false;
  }

  // 半角のみで、かつランダムな文字列のように見える場合はスパムと判定
  const hasMixedCase = /[a-z]/.test(company) && /[A-Z]/.test(company);
  const hasNoSpace = !/ /.test(company);
  const isLong = company.length >= 10;

  return hasMixedCase && hasNoSpace && isLong;
}
