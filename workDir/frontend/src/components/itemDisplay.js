import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemDisplay({
  itemName,
  imageUrl,
  iconUrl,
  Value,
  statType,
  augmentCount,
  presetAbility,
  rarityStars,
  storageIcon,
  storageText,
  onClick,
  href,
  className,
  onHover,
  onLeave
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (!href) {
      e.preventDefault();
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHover) onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onLeave) onLeave();
  };

  const getRarityClass = () => {
    if (rarityStars >= 1 && rarityStars <= 3) return 'rarity-common';
    if (rarityStars >= 4 && rarityStars <= 6) return 'rarity-rare';
    if (rarityStars >= 7 && rarityStars <= 9) return 'rarity-epic';
    if (rarityStars >= 10 && rarityStars <= 12) return 'rarity-legendary';
    if (rarityStars >= 13 && rarityStars <= 15) return 'rarity-mythic';
    return '';
  };

  const getRarityImageUrl = () => {
    if (rarityStars >= 1 && rarityStars <= 15) {
      return `/images/ngs/rarityicon/NGSUIRarity${rarityStars}Star.png`;
    }
    return '';
  };

  const getStatIconUrl = () => {
    if (statType === 'attack') {
      return "/images/ngs/NGSUIStatATKOutline.png";
    }
    return "/images/ngs/NGSUIStatDEFOutline.png";
  };

  const getStatValue = () => {
    return Value;
  };

  const buttonProps = {
    className: `item-display ${getRarityClass()} ${className || ''} ${isHovered ? 'item-hovered' : ''}`,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };

  if (href && !onClick) {
    buttonProps.href = href;
  }

  return (
    <Button {...buttonProps}>
      <div className="item-container">
        {/* Left side - Image & Storage */}
        <div className="item-left-wrapper">
          {storageIcon && (
            <div className="item-storage">
              <i className={storageIcon}></i>
              {storageText && <span className="storage-text">{storageText}</span>}
            </div>
          )}

          {imageUrl && (
            <div className="item-image-wrapper">
              <img
                src={imageUrl}
                alt={itemName}
                style={{ width: '100%', height: 'auto', maxHeight: '80px', objectFit: 'contain' }}
              />
            </div>
          )}

          {iconUrl && !imageUrl && (
            <div className="item-image-wrapper">
              <i className={`${iconUrl} fs-1`}></i>
            </div>
          )}
        </div>

        {/* Right side - Content */}
        <div className="item-right-wrapper">
          {/* Header with name and rarity */}
          <div className="item-header">
            <div className="item-separator">
              {iconUrl && (
                <img
                  src={iconUrl}
                  alt="item icon"
                  style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                />
              )}
              <h3 className="item-name">
                {itemName}
              </h3>
            </div>
            {rarityStars && (
              <div className="rarity-icon">
                <img
                  src={getRarityImageUrl()}
                  alt={`Rarity ${rarityStars} Star`}
                />
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="item-stats">
            {getStatValue() && (
              <div className="item-stat">
                <img
                  src={getStatIconUrl()}
                  alt="stat type"
                  style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                />
                <p>{getStatValue()}</p>
              </div>
            )}

            {augmentCount !== undefined && (
              <div className="item-stat">
                <img
                  src="/images/ngs/UINGSItemSpecialAbility.png"
                  alt="augments"
                  style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                />
                <p>{augmentCount}/8</p>
              </div>
            )}

            {presetAbility && (
              <div className="item-stat">
                <img
                  src="/images/ngs/UINGSItemPresetAbility.png"
                  alt="preset ability"
                  style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                />
                <p>{presetAbility}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Button>
  );
}

export default ItemDisplay;